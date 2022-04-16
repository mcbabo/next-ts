import { AppDataSource } from '../../src/index';

export default async function getData({id}){
    const db = await AppDataSource.getRepository(Model).findOne({where: {id: Number(id)}}
    const allPhotos = await photoRepository.find()
    return {
        data
    };
}