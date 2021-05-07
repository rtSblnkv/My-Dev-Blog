import {Section} from "../models/SectionSchema"

export async function getSectionId(sectionName){
    let section = await Section.findOne({name:sectionName}).exec();
    return section == null ? null : section['_id'];
}