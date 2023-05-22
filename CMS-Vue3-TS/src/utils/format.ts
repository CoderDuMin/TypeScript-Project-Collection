import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export function formatUTC(timeStr:string,format:string='YYYY-MM-DD HH:mm:ss'):string{
  return dayjs.utc(timeStr).format(format)
}
