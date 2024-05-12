import React from 'react';
import {  HeartIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShare,
    faPlus ,
     faSave,
     faBell,
     faArchive,
     faDownload,
     faPrint,
     faSearch,
} from '@fortawesome/free-solid-svg-icons';
function Action(){
    return(
        <div className="p-8 flex flex-col items-start gap-4 absolute w-80 h-100 left-0 top-444">
            <h6 className="font-bold font-jakarta-sans  text-xl leading-6 text-gray-700">Action sur l’annonce</h6>  
            <div className=" flex flex-col  items-start p-0 w-80 h-96">
                <div className="ml-4 flex items-center  hover:text-slate-500  text-blue-600 p-1 gap-2 w-80 h-10 rounded-lg"> 
                <HeartIcon className="w-30 mt-2  h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " >Mettre en favoris </button> 
                </div>
                <div className="ml-4 flex items-center  hover:text-slate-500  text-blue-600   p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon  icon={faShare}  className="w-30 mt-2 h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans" > Partager</button> 
                </div>
                <div className="ml-4 flex items-center    hover:text-slate-500  text-blue-600 p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon icon={faSave}  className="w-30 mt-2 h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " >Mettre au espace de travail</button> 
                </div>
                <div className="ml-4 flex items-center    hover:text-slate-500  text-blue-600 p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon icon={faPlus}  className="w-30 mt-2 h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " >Ajouter au projet</button> 
                </div>
                <div className="ml-4 flex items-center  hover:text-slate-500  text-blue-600   p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon icon={faBell} className="w-30 mt-2 h-4 font-bold font-jakarta-sans"  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " > Recevoir des avis similaires</button> 
                </div>
                <div className="ml-4 flex items-center   hover:text-slate-500  text-blue-600  p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon icon={faArchive}  className="w-30 mt-2 h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " >Mettre en archive</button> 
                </div>
                <div className="ml-4 flex items-center   hover:text-slate-500  text-blue-600  p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon icon={faDownload} className="w-30 mt-2 h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " >Telecharger le PDF</button> 
                </div>
                <div className="ml-4 flex items-center   hover:text-slate-500  text-blue-600  p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon icon={faPrint} className="w-30 mt-2 h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " >Imprimer</button> 
                </div>
                <div className="ml-4 flex items-center  hover:text-slate-500  text-blue-600   p-1 gap-2 w-80 h-10 rounded-lg"> 
                <FontAwesomeIcon icon={faSearch} className="w-30 mt-2 h-4 font-bold font-jakarta-sans "  />
                <button className="w-30  h-4 font-bold font-jakarta-sans " >Nouvelle recherche</button> 
                </div>
            </div>
        </div>    
    );
}
export default Action;