import axios, { isAxiosError } from "axios";
import { createInstance } from ".";

export interface IGetRequest {
    route: string;
    token?: string;
}

const getRequest = ({ route, token}: IGetRequest) => {
    try {
        const response = createInstance.get(route, {
            headers: { Authorization: `Bearer ${token}`}
        });

        return response;
    } catch (error) {
      if(isAxiosError(error)) {
        console.log(error.status);
        console.log(error.response);
      } else {
        console.error(error);
      }
    }

};

export { getRequest};