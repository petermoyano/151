import {
  ContactShadows,
  GizmoHelper,
  GizmoViewport,
  Grid,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, type ReactNode } from "react";
import { Vector3 } from "three";

interface ViewerSceneProps {
  showGrid: boolean;
  resetRequest: number;
  fitRequest: number;
  onClearSelection: () => void;
  children: ReactNode;
}

interface CameraControls {
  target: Vector3;
  update: () => void;
}

const DEFAULT_TARGET = new Vector3(0, 4.1, 0);

function CameraController({
  resetRequest,
  fitRequest,
}: Pick<ViewerSceneProps, "resetRequest" | "fitRequest">) {
  const camera = useThree((state) => state.camera);
  const controls = useThree((state) => state.controls) as CameraControls | null;

  useEffect(() => {
    if (!controls) return;
    camera.position.set(14.5, 10, 17.5);
    controls.target.copy(DEFAULT_TARGET);
    controls.update();
  }, [camera, controls, resetRequest]);

  useEffect(() => {
    if (!controls || fitRequest === 0) return;
    camera.position.set(18.5, 13.5, 23);
    controls.target.copy(DEFAULT_TARGET);
    controls.update();
  }, [camera, controls, fitRequest]);

  return null;
}

export function ViewerScene({
  showGrid,
  resetRequest,
  fitRequest,
  onClearSelection,
  children,
}: ViewerSceneProps) {
  return (
    <Canvas
      shadows="percentage"
      dpr={[1, 2]}
      camera={{ position: [14.5, 10, 17.5], fov: 42, near: 0.1, far: 120 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onPointerMissed={onClearSelection}
      aria-label="Escena 3D interactiva del Puente grúa 01"
      fallback={
        <div className="grid h-full place-items-center bg-[#090d13] p-8 text-center text-sm text-slate-400">
          No fue posible iniciar el visor 3D en este dispositivo.
        </div>
      }
    >
      <color attach="background" args={["#090d13"]} />
      <fog attach="fog" args={["#090d13", 24, 54]} />

      <hemisphereLight args={["#dcecff", "#101820", 1.45]} />
      <ambientLight intensity={0.38} />
      <directionalLight
        position={[10, 17, 9]}
        intensity={2.8}
        color="#f3f7ff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-18}
        shadow-camera-right={18}
        shadow-camera-top={18}
        shadow-camera-bottom={-18}
        shadow-camera-near={1}
        shadow-camera-far={45}
        shadow-bias={-0.00015}
      />
      <directionalLight
        position={[-10, 8, -12]}
        intensity={1.05}
        color="#7db9e8"
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.04, 0]}
        receiveShadow
      >
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial
          color="#0b1118"
          roughness={0.94}
          metalness={0.06}
        />
      </mesh>

      {showGrid ? (
        <Grid
          position={[0, 0.01, 0]}
          args={[44, 44]}
          cellSize={1}
          cellThickness={0.45}
          cellColor="#263746"
          sectionSize={5}
          sectionThickness={0.8}
          sectionColor="#3c566a"
          fadeDistance={36}
          fadeStrength={1.6}
          infiniteGrid
        />
      ) : null}

      {children}

      <ContactShadows
        position={[0, 0.02, 0]}
        opacity={0.42}
        scale={34}
        blur={2.4}
        far={14}
        resolution={1024}
        frames={1}
      />

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.07}
        minDistance={7}
        maxDistance={46}
        minPolarAngle={0.18}
        maxPolarAngle={Math.PI / 2.04}
        screenSpacePanning={false}
      />
      <CameraController resetRequest={resetRequest} fitRequest={fitRequest} />

      <GizmoHelper alignment="bottom-right" margin={[68, 66]}>
        <GizmoViewport
          axisColors={["#ef6b64", "#6fc68a", "#68a8e8"]}
          labelColor="#d8e0e8"
        />
      </GizmoHelper>
    </Canvas>
  );
}
