import { ShaderGradientCanvas, ShaderGradient } from "shadergradient"
import * as reactSpring from "@react-spring/three"
import * as drei from "@react-three/drei"
import * as fiber from "@react-three/fiber"

export function ShaderBackground() {
  return (
    // <div className="absolute top-4 left-4 w-[calc(100%_-_32px)] h-[calc(100%_-_32px)] -z-10">
    <div className="absolute top-0 left-0 w-screen h-screen -z-[11]">
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        pointerEvents="none"
      >
        <ShaderGradient
          control="query"
          title="dark"
          urlString={
            "https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&toggleAxis=false&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false&zoomOut=false"
            // "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23ff08ea&bgColor2=%2300b83a&brightness=1.2&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%2300400d&color2=%23005252&color3=%2300ebeb&embedMode=off&envPreset=dawn&fov=45&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=2.2&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=2.6&uDensity=0.7&uFrequency=5.5&uSpeed=0.1&uStrength=0.1&uTime=0&wireframe=false"
          }
        />
      </ShaderGradientCanvas>
    </div>
  )
}
