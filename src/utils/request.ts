import {Axios,AxiosRequestConfig} from 'axios'

interface LoadingOption{
    show?:boolean,
    message?:string
}

interface RequestConfig extends AxiosRequestConfig{

}

interface HTTP_STATUS{
    SUCCESS?:Number,
    AUTHENTICATE?:Number,
    FORBIDDEN?:Number,
    HTTP_Version_Not_Supported?:Number,
    GateWay_Timeout?:Number,
    Service_Unbelievable?:Number,
    Bad_Request?:Number,
}

class Request implements HTTP_STATUS{

    SUCCESS?: Number | undefined;
    AUTHENTICATE?: Number | undefined;
    FORBIDDEN?: Number | undefined;

    constructor(){
        this.SUCCESS = 200;
        this.AUTHENTICATE = 401,
        this.FORBIDDEN = 403
    }
    nttRequest(options:LoadingOption){

    }

    cloudRequest(options:LoadingOption){

    }

    operateRequest(options:LoadingOption){

    }

}



export default new Request();