
"use client";
import { usePathname } from 'next/navigation';
import { ReturnType} from './type';

export const Hook = (): ReturnType => {
  const path = usePathname();

  return { locale: path?.split('/')?.length > 1 ? path?.split('/')[1] as 'az' : "en"  };
}