create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text,
  created_at timestamp with time zone default now()
);

alter table public.profiles enable row level security;

create policy "Usuario pode ver proprio perfil"
on public.profiles
for select
using (auth.uid() = id);

create policy "Usuario pode criar proprio perfil"
on public.profiles
for insert
with check (auth.uid() = id);

create policy "Usuario pode atualizar proprio perfil"
on public.profiles
for update
using (auth.uid() = id);
