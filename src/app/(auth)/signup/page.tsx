import Link from "next/link";
import Input from "~/components/Input";
import { signup } from "../actions";

export default function SignUpPage() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="card sm:bg-base-100 sm:w-[30rem] sm:shadow-xl">
        <div className="card-body gap-0">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Crie sua conta
          </h2>

          <form className="mt-10">
            <div className="mt-2">
              <Input id="name" name="name" leftLabel="Nome completo" />
            </div>
            <div className="mt-2">
              <Input id="email" name="email" leftLabel="Email" type="email" />
            </div>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                leftLabel="Senha"
                type="password"
              />
            </div>

            <button formAction={signup} className="btn btn-primary mt-4 w-full">
              Criar conta
            </button>
          </form>

          <p className="mt-8 text-center">Já tem uma conta?</p>
          <Link href="/signup" className="btn btn-link m-0">
            Acesse aqui
          </Link>
        </div>
      </div>
    </main>
  );
}
