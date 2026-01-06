import { pgTable, integer, varchar, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { usuario } from "./usuario.ts";

export const categoria = pgTable("tipo_tarefa",{
    id: uuid().defaultRandom().primaryKey(),
    descricao: varchar({ length:64 }),
    status: integer().notNull(),
    usuarioId: uuid().references(() => usuario.id)
});

export const categoria_relation_with_usuario = relations(categoria, ({ one }) => ({
    author: one(usuario, {
        fields:[categoria.usuarioId],
        references: [usuario.id]
    })
}))