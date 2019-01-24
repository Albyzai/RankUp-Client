import { ProfileType } from './ProfileType';

export interface Profile {
    id: number;
    profileType: ProfileType;
    name: string;
    birthday: Date;
    phone: string;
    vat: string;
    profile_picture: string;
    introduction: string;
}
