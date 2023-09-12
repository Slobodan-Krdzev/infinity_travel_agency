import { DropdownDestinationType } from "@/types/types"
import { useEffect, useState } from "react"

export type StatusType = 'loading' | 'error' | 'success'
export type UseFetchDataType = DropdownDestinationType | string[] 

const useFetchClientSide = (url: string) => {

    const [data, setData] = useState<any>([])
    const [status, setStatus] = useState<StatusType>('loading')
    
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setStatus('success')
          })
          .catch((e) => {
            setStatus('error')
          });
      }, []);

    return [data, status]
}

export default useFetchClientSide;