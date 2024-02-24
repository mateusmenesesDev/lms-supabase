"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { env } from "~/env";
import { createClient } from "~/services/supabase/auth/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!data.email || !data.password) {
    return;
  }

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    env.NODE_ENV === "development" &&
      console.error("🚀 ~ login ~ error:", error.message);
    return;
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    env.NODE_ENV === "development" &&
      console.error("🚀 ~ signup ~ error:", error.message);
    return;
  }

  revalidatePath("/", "layout");
  redirect("/");
}
