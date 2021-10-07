import React, { Component } from "react"
import { globalHistory } from '@reach/router'
import * as THREE from 'three'

class TestPage extends Component {
    constructor() {
        super()
        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer()
    }

    componentDidMount() {
        globalHistory.listen(() => {
            console.log("hi")
            this.renderer.domElement.remove()
        })

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)

        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        camera.position.z = 5

        const animate = () => {
            requestAnimationFrame(animate)

            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            this.renderer.render(scene, camera)
        }

        animate()
    }

    render() {
        return <div>
        </div>
    }
}

export default TestPage