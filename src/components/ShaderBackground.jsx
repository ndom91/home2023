import { ShaderGradientCanvas, ShaderGradient } from "shadergradient"
import * as reactSpring from "@react-spring/three"
import * as drei from "@react-three/drei"
import * as fiber from "@react-three/fiber"

export function ShaderBackground(test) {
  return (
    <>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        pointerEvents="none"
        className="fixed left-0 top-0 z-10 hidden h-screen w-screen dark:block"
      >
        <ShaderGradient
          control="query"
          title="dark"
          urlString={
            "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23ff08ea&bgColor2=%2300b83a&brightness=1.2&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%2300400d&color2=%23005252&color3=%2300ebeb&embedMode=off&envPreset=dawn&fov=45&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=2.2&positionX=0&positionY=0&positionZ=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=2.6&uDensity=0.7&uFrequency=5.5&uSpeed=0.1&uStrength=0.1&uTime=0&wireframe=false"
          }
        />
      </ShaderGradientCanvas>
      <ShaderGradientCanvas
        importedFiber={{ ...fiber, ...drei, ...reactSpring }}
        pointerEvents="none"
        className="fixed left-0 top-0 z-10 block h-screen w-screen dark:hidden"
      >
        <ShaderGradient
          control="query"
          title="light"
          urlString={
            "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.9&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23F27562&color2=%23FFF8EE&color3=%23C7B8DA&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&toggleAxis=false&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=2.3&wireframe=false&zoomOut=false"
          }
        />
      </ShaderGradientCanvas>
    </>
  )
}
