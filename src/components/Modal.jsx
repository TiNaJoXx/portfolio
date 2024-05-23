import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton
} from "@material-tailwind/react";
import { XMarkIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import data from '../json/projects'
import { iconComponents} from '../assets/icons/Icons';

const Modal = ({ isOpen, onClose, selectedProject }) => {
    const project = data.find(item => item.id === selectedProject);

    return (
        <Dialog open={isOpen} handler={onClose} size={"xl"} className='px-3 py-3 lg:p-5 -mt-24 lg:-mt-0'>
            <DialogHeader className="justify-between w-full">
                <h3 className='text-xl lg:text-2xl'>{project?.name}</h3>
                <IconButton
                    color="blue-gray"
                    size="sm"
                    variant="text"
                    onClick={onClose}
                >
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                </IconButton>
            </DialogHeader>
            <DialogBody className='p-0 lg:p-4'>
                <div className='flex flex-col items-start gap-2 lg:gap-8 lg:flex-row'>
                    <div className='flex flex-col gap-1 lg:gap-5 flex-grow basis-0 whitespace-pre-line text-black text-sm lg:text-base'>
                        <div className=''>
                            {project?.description}
                        </div>
                        <div className='mb-1 lg:mb-3'>
                            <h4 className='mb-2 lg:mb-3'>Lenguajes</h4>
                            <div className='flex flex-wrap gap-2' >
                            {
                                project?.languages.map(lang => (
                                    <div key={lang} className='w-4 lg:w-5 2xl:w-6'>
                                        {iconComponents[lang]}
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-5' >
                            <div className='flex-grow basis-0'>
                                <h4 className='mb-1 lg:mb-3'>Año</h4>
                                {project?.year}
                            </div>
                            <div className='flex-grow basis-0'>
                                <h4 className='mb-1 lg:mb-3'>Enlaces</h4>
                                <div className='flex flex-wrap gap-2' >
                                {
                                    project?.links.map(link => (
                                        <a 
                                            key={`${project.id}-${link.name}`}
                                            className='flex gap-2 items-center py-0.5 px-3 border border-[#979797] rounded-xl text-[#979797] hover:text-black hover:border-black'
                                            href={link.url}
                                            target='_blank'
                                        >
                                            {link.name}
                                            <ArrowTopRightOnSquareIcon strokeWidth={2} className="h-5 w-5" />
                                        </a>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-grow basis-0 border-t-2 border-b-2 py-3 border-[#979797] order-first flex justify-center lg:order-last'>
                        {<img src={project?.img} alt={project?.name} className=' w-2/3 lg:w-full' />}
                    </div>
                </div>
            </DialogBody>
            {/* <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={onClose}
                    className="mr-1"
                >
                    <span>CERRAR</span>
                </Button>
            </DialogFooter> */}
        </Dialog>
    );
};

export default Modal;