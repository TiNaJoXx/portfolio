import React, {useState} from 'react'
import data from '../json/projects'
import { iconComponents} from '../assets/icons/Icons';
import Modal from '../components/Modal';

const ProjectsPage = () => {
    const [selectedProject, setSelectedPooject] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleClickProject = (id) => {
      setSelectedPooject(id);
      setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className='px-4 py-5 lg:px-20 lg:py-16'>
          <h2 className='text-center mb-5'>Proyectos</h2>
          <div className='grid grid-cols-1 gap-1 lg:grid-cols-3'>
            {
              data.map(project => (
                <div key={project.name} className='flex-grow basis-0 relative cursor-pointer shadow-xl' onClick={() => handleClickProject(project.id)}>
                  <img src={project.img} className='w-full h-full' alt={project.name} />
                  <div className='absolute px-5 py-5 inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 rounded'>
                    <h2 className='text-white'>{project.name}</h2>
                    <p className='text-white py-3 text-sm lg:text-base'>{project.descr}</p>
                    <div className='flex gap-2 mb-3 absolute bottom-5  left-5'>
                    {
                      project.languages.map(lang => (
                        <div key={lang} className='w-4 lg:w-5 2xl:w-6 text-white'>
                          {iconComponents[lang]}
                        </div>
                      ))
                    }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <Modal
              isOpen={isOpen} 
              onClose={handleClose} 
              selectedProject={selectedProject}
          />
        </div>
    )
}

export default ProjectsPage