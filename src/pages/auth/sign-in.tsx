import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/sign-in'

const signInForm = z.object({
    email: z.string().email(),
})

type signInForm = z.infer<typeof signInForm>

export function SignIn() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<signInForm>()

    const { mutateAsync: authenticate } = useMutation({
        mutationFn: signIn
    })

    async function handleSignIn(data: signInForm) {
        try {
            await authenticate({ email: data.email })
            toast.success('Enviamos um link de autentificação para seu e-mail.', {
                action: {
                    label: 'Reenviar',
                    onClick: () => handleSignIn(data)
                }
            })
        } catch {
            toast.error('Credenciais inválidas.')
        }
    }

    return (
        <>
            <Helmet title='Login' />
            <div className="p-8">
                <Button asChild className='absolute right-4 top-8'>
                    <Link to="/sign-up" className=''>
                        Novo estabelecimento
                    </Link>
                </Button>
                <div className='w-[350px] flex-col justify-center gap-6'>
                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className='text-2xl font-semibold tracking-tight'>
                            Acessar painel
                        </h1>

                        <p className='text-sm text-muted-foreground'>
                            Acompanhe suas vendas pelo painel do parceiro
                        </p>
                    </div>

                    <form action='' className='space-y-4' onSubmit={handleSubmit(handleSignIn)}>
                        <div className='space-y-2'>
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>

                        <Button type="submit" className='w-full' disabled={isSubmitting} >
                            Acessar painel
                        </Button>
                    </form>
                </div>
            </div>
        </>

    )
}