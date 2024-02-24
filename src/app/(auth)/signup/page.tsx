import Link from "next/link";
import Input from "~/components/Input";

export default function SignUpPage() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="card sm:bg-base-100 sm:w-[30rem] sm:shadow-xl">
        <div className="card-body gap-0">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua conta
          </h2>

          <form action="#" method="POST" className="mt-10">
            <div className="mt-2">
              <Input leftLabel="Nome completo" />
            </div>
            <div className="mt-2">
              <Input leftLabel="Email" type="email" />
            </div>
            <div className="mt-2">
              <Input leftLabel="Senha" type="password" />
            </div>

            <button type="submit" className="btn btn-primary mt-4 w-full">
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
