'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* ---------- Shaders ---------- */
const vertexShader = /* glsl */ `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv       = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`

const fragmentShader = /* glsl */ `
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4      resolution;
varying vec2       vUv;

void main() {
  vec2  uv     = vUv;
  vec4  offset = texture2D(uDataTexture, uv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}`

/* ---------- Props ---------- */
interface GridDistortionProps {
  imageSrc: string
  grid?: number
  mouse?: number
  strength?: number
  relaxation?: number
  className?: string
}

/* ---------- Componente ---------- */
const GridDistortion: React.FC<GridDistortionProps> = ({
  imageSrc,
  grid        = 15,
  mouse       = 0.1,
  strength    = 0.15,
  relaxation  = 0.9,
  className   = '',
}) => {
  /* Refs ----------------------------------------------------------- */
  const containerRef   = useRef<HTMLDivElement | null>(null)
  const imageAspectRef = useRef<number>(1)
  const cameraRef      = useRef<THREE.OrthographicCamera | null>(null)

  /* Efecto --------------------------------------------------------- */
  useEffect(() => {
    if (!containerRef.current) return

    /* Escena, renderer, cámara ------------------------------------ */
    const container = containerRef.current
    const scene     = new THREE.Scene()

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha:     true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000)
    camera.position.z = 2
    cameraRef.current = camera

    /* Uniforms ----------------------------------------------------- */
    const uniforms: {
      time:          { value: number }
      resolution:    { value: THREE.Vector4 }
      uTexture:      { value: THREE.Texture | null }
      uDataTexture:  { value: THREE.DataTexture | null }
    } = {
      time:        { value: 0 },
      resolution:  { value: new THREE.Vector4() },
      uTexture:    { value: null },
      uDataTexture:{ value: null },
    }

    /* Carga de la imagen ------------------------------------------ */
    new THREE.TextureLoader().load(imageSrc, (texture) => {
      texture.minFilter     = THREE.LinearFilter
      imageAspectRef.current =
        (texture.image as HTMLImageElement).width /
        (texture.image as HTMLImageElement).height
      uniforms.uTexture.value = texture
      handleResize()
    })

    /* Data texture (campo vectorial) ------------------------------ */
    const size = grid
    const data = new Float32Array(4 * size * size)
    for (let i = 0; i < size * size; i++) {
      data[i * 4]     = Math.random() * 255 - 125
      data[i * 4 + 1] = Math.random() * 255 - 125
    }
    const dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType,
    )
    dataTexture.needsUpdate  = true
    uniforms.uDataTexture.value = dataTexture

    /* Malla -------------------------------------------------------- */
    const material  = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms,
      vertexShader,
      fragmentShader,
    })
    const geometry  = new THREE.PlaneGeometry(1, 1, size - 1, size - 1)
    const plane     = new THREE.Mesh(geometry, material)
    scene.add(plane)

    /* Resize ------------------------------------------------------- */
    const handleResize = () => {
      const { offsetWidth: w, offsetHeight: h } = container
      const containerAspect = w / h
      const imageAspect     = imageAspectRef.current

      renderer.setSize(w, h)

      /* Escalado de la imagen */
      const scale = Math.max(containerAspect / imageAspect, 1)
      plane.scale.set(imageAspect * scale, scale, 1)

      /* Ajuste de cámara ortográfica */
      const frustumH = 1
      const frustumW = frustumH * containerAspect
      camera.left   = -frustumW / 2
      camera.right  =  frustumW / 2
      camera.top    =  frustumH / 2
      camera.bottom = -frustumH / 2
      camera.updateProjectionMatrix()

      uniforms.resolution.value.set(w, h, 1, 1)
    }

    /* Ratón -------------------------------------------------------- */
    const mouseState = {
      x: 0, y: 0,
      prevX: 0, prevY: 0,
      vX: 0, vY: 0,
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x    = (e.clientX - rect.left) / rect.width
      const y    = 1 - (e.clientY - rect.top) / rect.height
      mouseState.vX = x - mouseState.prevX
      mouseState.vY = y - mouseState.prevY
      Object.assign(mouseState, { x, y, prevX: x, prevY: y })
    }

    const onMouseLeave = () => {
      dataTexture.needsUpdate = true
      Object.assign(mouseState, { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 })
    }

    /* Listeners ---------------------------------------------------- */
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', handleResize)
    handleResize()

    /* Animación ---------------------------------------------------- */
    const animate = () => {
      requestAnimationFrame(animate)
      uniforms.time.value += 0.05

      /* Relajación global */
      for (let i = 0; i < size * size; i++) {
        data[i * 4]     *= relaxation
        data[i * 4 + 1] *= relaxation
      }

      /* Influencia del ratón */
      const gridMouseX = size * mouseState.x
      const gridMouseY = size * mouseState.y
      const maxDist    = size * mouse

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const distSq = (gridMouseX - i) ** 2 + (gridMouseY - j) ** 2
          if (distSq < maxDist ** 2) {
            const idx   = 4 * (i + size * j)
            const power = Math.min(maxDist / Math.sqrt(distSq), 10)
            data[idx]     += strength * 100 * mouseState.vX * power
            data[idx + 1] += strength * -100 * mouseState.vY * power
          }
        }
      }

      dataTexture.needsUpdate = true
      renderer.render(scene, camera)
    }
    animate()

    /* Limpieza ----------------------------------------------------- */
    return () => {
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      dataTexture.dispose()
      uniforms.uTexture.value?.dispose()
    }
  }, [grid, mouse, strength, relaxation, imageSrc])

  /* Render --------------------------------------------------------- */
  return <div ref={containerRef} className={`w-full h-full overflow-hidden ${className}`} />
}

export default GridDistortion
