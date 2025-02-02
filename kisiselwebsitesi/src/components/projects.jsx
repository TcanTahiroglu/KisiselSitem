import data from '../data.json';

const Projects = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>{data.user[0].Projectsh1Tr}</h1>
      <div className="flex flex-col gap-4">
        {data.user[0].Projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-md bg-white">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-gray-600 mt-2">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
