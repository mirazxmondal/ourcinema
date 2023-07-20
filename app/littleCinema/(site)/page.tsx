import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {/* <h1 className="text-7xl font-extrabold">
        Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {" "}
          Mr.Bot!
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my projects!
      </p> */}
      <div className="flex flex-row">
        <h2 className="font-bold text-3xl">RELATED</h2>
        <h2 className="font-bold text-red-600 text-3xl"> ARTICLES</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="mt-5 flex flex-col justify-center items-center w-[620px]">
          <div className="max-w-full flex flex-row space-x-5 ">
            <Link href={`/projects/${projects[0].slug}`}>
              <div
                className="h-[342px] w-[400px] border border-black rounded-2xl"
                style={{
                  backgroundImage: `url(${projects[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className={`text-right p-2 text-white absolute bottom-96`}>
                  {projects[0].name}
                </div>
              </div>
            </Link>

            <Link href={`/projects/${projects[4].slug}`}>
              <div
                className="h-[342px] w-[200px] border border-black rounded-2xl"
                style={{
                  backgroundImage: `url(${projects[4].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </Link>
          </div>

          <Link href={`/projects/${projects[2].slug}`}>
            <div
              className="w-[620px] h-52 border border-black mt-5 rounded-2xl"
              style={{
                backgroundImage: `url(${projects[2].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div></div>
            </div>
          </Link>
          <div className="mt-5 flex space-x-5">
            <Link href={`/projects/${projects[3].slug}`}>
              <div
                className="h-[354px] w-[240px] rounded-2xl border border-black"
                style={{
                  backgroundImage: `url(${projects[3].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </Link>

            <div className="space-y-3 flex flex-col">
              <Link href={`/projects/${projects[1].slug}`}>
                <div
                  className="h-[171px] w-[360px] border rounded-2xl border-black"
                  style={{
                    backgroundImage: `url(${projects[1].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Link>
              <Link href={`/projects/${projects[5].slug}`}>
                <div
                  className="h-[171px] w-[360px] rounded-2xl border border-black"
                  style={{
                    backgroundImage: `url(${projects[5].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </Link>
            </div>
          </div>
        </div>
        {projects.slice(0, 5).map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 mb-5 mt-5"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>

      {/* <div className="mt-5 grid md:grid-cols-2">
        {projects.map((projects[0]) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
