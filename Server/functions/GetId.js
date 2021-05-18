import {Section} from "../models/SectionSchema.js"

export  function getSectionId(sectionName){
    let section = Section.find({'section_name':sectionName});
    return section.id;
}