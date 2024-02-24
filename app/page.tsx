import Image from "next/image";
import omelette from "../app/assets/image-omelette.jpeg";

export default function Home() {
  return (
    <div className="relative bg-eggshell min-h-screen bg-cover flex justify-center items-center mx-auto ">
      
      <div className="bg-white p-0 md:p-10 w-[736px] md:h-[2000px] md:rounded-2xl md:my-36">
      <div className="">
        <Image
          src={omelette}
          className="md:rounded-xl "
          // layout="fill"
          // objectFit="cover"
          // quality={100}
          // alt="Background"
        />
      </div>
      <main className="relative z-10 p-10">
        <div>
        <h1 className="text-3xl md:text-5xl font-bold font-young-serif mt-5 text-dark-charcoal">Simple Omelett Recipe</h1>
          <p className="text-wenge-brown mt-6 font-outfit">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </div>

          <div>
            <div>
            <div className="p-4 bg-rose-white rounded-[10px] mb-[1.75rem] mt-6">
              <h2 className="mb-4 text-xl  text-dark-raspberry font-bold">
                Preparation Time
              </h2>

            <ul className="list-inside list-disc flex flex-col gap-3">
              
              <li className="pl-4">
                <span className="text-wenge-brown font-bold">
                  Total
                </span>
                : Approximately 10 minutes
              </li>
              <li className="pl-4">
                <span className="text-wenge-brown font-bold">
                  Preparation
                </span>
                : 5 minutes
              </li>
              <li className="pl-4">
                <span className="text-wenge-brown font-bold">Cooking</span>
                : 5 minutes
              </li>
            </ul>
          </div>
            </div>
          </div>
          <div>
          <div className="pb-8 border-b-[1px]  border-solid border-light-grey">
            <h2 className="text-nutmeg text-3xl font-bold font-young-serif mb-7 text-7">
              Ingredients
            </h2>

            <ul className="pl-8 list-disc flex flex-col gap-[0.75rem] marker:text-nutmeg">
              <li className="pl-4">2-3 large eggs</li>
              <li className="pl-4">Salt, to taste</li>
              <li className="pl-4">Pepper, to taste</li>
              <li className="pl-4">1 tablespoon of butter or oil</li>
              <li className="pl-4">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          </div>
          <div>
            <div className="border-b-[1px] pb-[2rem]">
              <h2 className="text-3xl font-bold font-young-serif mt-10 text-nutmeg ">Instructions</h2>
              <ol className="text-wenge-brown mt-6 font-outfit list-decimal marker:font-bold marker:text-nutmeg">
              <li className="pl-4">
                <span>
                  <span className="text-wenge-brown font-bold">
                    Beat the eggs:
                  </span>{" "}
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </li>
              <li className="pl-4">
                <span className="text-wenge-brown font-bold">
                  Heat the pan:
                </span>{" "}
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li className="pl-4">
                <span className="text-wenge-brown font-bold">
                  Cook the omelette:
                </span>{" "}
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="pl-4">
                <span className="text-wenge-brown font-bold">
                  Add fillings (optional):
                </span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="pl-4">
                <span>
                  <span className="text-wenge-brown font-bold ">
                    Fold and serve:
                  </span>{" "}
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </span>
              </li>
              <li className="pl-4">
                <span>
                  <span className="text-wenge-brown font-bold ">
                    Enjoy:
                  </span>{" "}
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
              </ol>            
            </div>
          </div>
          <div>
          <div className="pt-7">
            <h2 className="text-nutmeg font-young-serif mb-7 font-bold text-3xl">
              Nutrition
            </h2>

            <table className="w-[100%] table-auto border-separate border-spacing-y-4">
              <caption className="text-left mb-4">
                The table below shows nutritional values per serving without the
                additional fillings.
              </caption>

              <tbody>
                <tr className="">
                  <td className="border-solid border-b-[1px] border-light-grey pb-4 pl-[2rem]">
                    Calories
                  </td>
                  <td className="border-solid border-b-[1px] border-light-grey pb-4 font-bold text-nutmeg">
                    277kcal
                  </td>
                </tr>
                <tr className=" ">
                  <td className="border-solid border-b-[1px] border-light-grey pb-4 pl-[2rem]">
                    Carbs
                  </td>
                  <td className="border-solid border-b-[1px] border-light-grey pb-4 font-bold text-nutmeg">
                    0g
                  </td>
                </tr>
                <tr className=" ">
                  <td className="border-solid border-b-[1px] border-light-grey pb-4 pl-[2rem]">
                    Protein
                  </td>
                  <td className="border-solid border-b-[1px] border-light-grey pb-4 font-bold text-nutmeg">
                    20g
                  </td>
                </tr>
                <tr>
                  <td className="pl-8">Fat</td>
                  <td className="font-bold text-nutmeg">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        


      </main>
      </div>
      
    </div>
    
  );
}

