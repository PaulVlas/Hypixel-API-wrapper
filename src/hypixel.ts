import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Skyblock } from "./skyblock/skyblock";

export class Hypixel {
    private readonly client: AxiosInstance;

    hypixelSkyblock: Skyblock;

    constructor(private readonly key: string) {
        this.client = axios.create({ baseURL: 'https://api.hypixel.net/' });

        this.hypixelSkyblock = new Skyblock(this);
    }

    skyblock() {
        return this.hypixelSkyblock;
    }

    /**
     * GET request
     * 
     * @param path Endpoint
     * @param query Query options
     * @returns
     */
    async get(path: string, params: QueryParams): Promise<Response> {
        params.key = this.key;
        const response: AxiosResponse = await this.client.get(path, {params});

        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        const hypixelResponse: Response = response.data;

        if (!hypixelResponse.success) {
            throw new Error(hypixelResponse.cause);
        }

        return hypixelResponse;
    }

    
}

export interface QueryParams {
    [key: string]: string
}

export interface Response {
    success: boolean
    cause?: string
    [key: string]: any
}