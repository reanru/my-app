// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retreiveData, retreiveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: string;
    statusCode: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    // const data = await retreiveData("shops")

    // console.log('check ', );
    
    if(req.query.product![1]){
        const data = await retreiveDataById("products", req.query.product![1]);
        res.status(200).json({status: "success", statusCode:200, data});
    }else{

        const data = await retreiveData("products");
    
        res.status(200).json({status: "success", statusCode:200, data});
    }

}
