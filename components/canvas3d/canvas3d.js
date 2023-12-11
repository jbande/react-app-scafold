'use client';
import React, {useEffect, useRef} from "react";
import * as BABYLON from "@babylonjs/core"




export default function Canvas3d () {


    useEffect(() => {


        const canvas = document.getElementById('d3canvas')
        const engine = new BABYLON.Engine(canvas)
        window.addEventListener('resize', () => (
            engine.resize()
        ))
        //console.log(canvas)
        //console.log(engine)


        const createScene = function () {
            const scene = new BABYLON.Scene(engine)
            scene.createDefaultCameraOrLight(true, false, true)

            //scene.createDefaultCamera()

            //scene.createDefaultLight()
            //const camera = new BABYLON.UniversalCamera('camera',
            //    new BABYLON.Vector3(0,5,-10), scene)
            //camera.attachControl(true)

            //camera.inputs.addMouseWheel()
            //camera.setTarget(BABYLON.Vector3.Zero())


            const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
                size: 0.7,
                // width: 2,
                // height: 0.05,
                // depth: 0.5,
                // faceColors: [
                //     new BABYLON.Color4(1,0,0,1),
                //     BABYLON.Color3.Green()
                // ],
                faceUV: [

                ]
            })
            const boxCatMat = new BABYLON.StandardMaterial()
            box.material = boxCatMat
            boxCatMat.emissiveTexture = new BABYLON.Texture('/chivaSexy.jpg')

            // const sphere = new BABYLON.
            // MeshBuilder.CreateSphere('mySphere', {
            //     segments: 50,
            //     diameter: 0.3,
            //     diameterX: 0.4
            // }, scene)
            //
            // const sphereMaterial = new BABYLON.StandardMaterial()
            // sphere.material = sphereMaterial
            //
            // sphereMaterial.diffuseTexture = new BABYLON.Texture('/snowdon.png')

            //sphereMaterial.diffuseColor = new BABYLON.Color3(0,1,0)
            //sphereMaterial.specularColor = new BABYLON.Color3(1,0,0)
            // sphereMaterial.ambientColor = new BABYLON.Color3(0,1,0)
            // scene.ambientColor = new BABYLON.Color3(0,0,1)
            // sphereMaterial.emissiveColor = new BABYLON.Color3(0,1,0)


            // const ground = new BABYLON.MeshBuilder.CreateGround('',{
            //     height: 10,
            //     width: 10,
            //     subdivisions: 30
            // })

            // const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('',
            //     '/snowdon.png',
            //     {
            //         height: 10,
            //         width:  10,
            //         subdivisions: 50,
            //         maxHeight: 2
            //     })

            return scene
        }

        const scene = createScene()
        engine.runRenderLoop(function () {
            scene.render()
        })
    })


    return (
        <div>
            <canvas id="d3canvas" style={{
                width: '800px',
                height: '800px',
                'touch-action': 'none'
            }}>

            </canvas>
        </div>
    )
}