import { useEffect, useState } from "react";

export default function AlejaCanvas() {
  // Función para crear instancias de animaciones Rive
  const createRiveInstance = (canvasId: string) => {
    const canvasElement: HTMLElement | null = document.getElementById(canvasId);
    if (!canvasElement) {
      console.error(`Canvas with id "${canvasId}" not found.`);
      return;
    }

    try {
      // @ts-ignore
      return new rive.Rive({
        src: "/animations/aleja.riv",
        canvas: canvasElement,
        autoplay: true,
        artboard: "Artboard",
        stateMachines: "State Machine 1",
      });
    } catch (error) {
      console.error(
        `Error initializing Rive animation for ${canvasId}:`,
        error
      );
    }
  };

  const [showColors, setShowColors] = useState(false);

  // Inicialización de animaciones cuando el componente se monta
  useEffect(() => {
    createRiveInstance("canvas-aleja");

    setTimeout(() => {
      setShowColors(true);
    }, 2500);
  }, []);

  return (
    <div className="relative w-[500px] -left-[70px] -top-[100px]">
      <div role="dialog">
        <div className="bg-white shadow-sm p-4 rounded-md fixed w-[40dvh] h-[40dvh] inset-0 mx-auto top-[20dvh] z-10">
          <h1 className="font-bold text-center ">Feliz día de la mujer</h1>
          <p className="text-center leading-[1.5] text-sm mt-8">
            ¡Feliz día, Aleja! ✨ Eres una mujer increíblemente valiente. A
            pesar de los momentos difíciles, sigues en pie, iluminando la vida
            de quienes más te quieren. Nunca dejes de sonreír.
          </p>
        </div>
      </div>
      <button
        className={`absolute top-[350px] p-6 shadow-sm bg-white rounded-md ${
          showColors ? "opacity-100" : "opacity-0"
        } transition-opacity delay-150`}
      >
        1
        <button
          className={`absolute top-[250px] left-[200px] p-6 shadow-sm bg-white/40 rounded-md ${
            showColors ? "opacity-100" : "opacity-0"
          } transition-opacity delay-150`}
        >
          2
        </button>
      </button>

      <button
        className={`absolute top-[200px] right-0 p-6 shadow-sm bg-white/40 rounded-md ${
          showColors ? "opacity-100" : "opacity-0"
        } transition-opacity delay-150`}
      >
        4
        <button
          className={`absolute top-[200px] p-6 shadow-sm bg-white/40 rounded-md ${
            showColors ? "opacity-100" : "opacity-0"
          } transition-opacity delay-150`}
        >
          3
        </button>
      </button>
      {/* <canvas id="canvas-aleja" width="575" height="770"></canvas> */}
    </div>
  );
}
