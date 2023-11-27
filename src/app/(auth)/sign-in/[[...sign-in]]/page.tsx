import FormWrap from '@/components/FormWrap'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <FormWrap>
      <SignIn />
    </FormWrap>
  )
}
