import { Hypixel, QueryParams, Response } from "../hypixel";
import { Profile } from "./profile/profileObject";

export class Skyblock {
    constructor(private readonly hypixel: Hypixel) {}

    private async get(path: string, params: QueryParams): Promise<Response> {
        return this.hypixel.get('skyblock/' + path, params);
    }

    /**
     * Get skyblock profile from profile id
     * @param profile_id profile id 
     * @returns profile data
     */
    async getProfile(profile_id: string): Promise<Profile> {
        const profile: Profile = (await this.get('profile', {profile: profile_id})).profile;
        return profile;
    }

    async getProfiles(uuid: string) {
        const profiles: Profile[] = (await this.get('profiles', {uuid})).profiles;
        return profiles;
    }
}