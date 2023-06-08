import { useLoginStore } from "@/store/modules/login";

function usePermission(permissionId:string):boolean{
  const loginStore = useLoginStore()
  return loginStore.permissions.includes(permissionId)
}

export default usePermission
