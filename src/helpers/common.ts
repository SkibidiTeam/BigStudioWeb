import { toast } from 'vue3-toastify'

export const successMessage = (message: string) => {
  toast(
    `<div class="font-bold text-emerald-600 text-base">成功</div> <div class="text-sm mt-2">${message}</div>`,
    {
      theme: 'light',
      type: 'success',
      dangerouslyHTMLString: true,
    },
  )
}

export const errorMessage = (message: string) => {
  toast(
    `<div class="font-bold text-[#F58582] text-base">エラー</div> <div class="text-sm mt-2">${message}</div>`,
    {
      theme: 'light',
      type: 'error',
      dangerouslyHTMLString: true,
    },
  )
}
