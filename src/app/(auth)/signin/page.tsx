import Link from "next/link";
import Input from "~/components/Input";

export default function SignInPage() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <div className="card sm:bg-base-100 sm:w-[30rem] sm:shadow-xl">
        <div className="card-body">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Acessar o sistema
          </h2>

          <form action="#" method="POST" className="mt-10">
            <div className="mt-2">
              <Input leftLabel="Email" type="email" />
            </div>
            <div className="mt-2">
              <Input leftLabel="Senha" type="password" />
            </div>
            <Link href="/forgot-password" className="btn btn-link px-0">
              Esqueceu sua senha?
            </Link>

            <button type="submit" className="btn btn-primary mt-4 w-full">
              Entrar
            </button>
          </form>

          <Link href="/signup" className="btn btn-link mt-8 text-center">
            Crie uma nova conta
          </Link>
        </div>
      </div>
    </main>
  );
}
