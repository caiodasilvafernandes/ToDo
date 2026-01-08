import { pgTable, integer, varchar, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { usuario_tabela } from "./usuario_table.ts";

export const categoria = pgTable("tipo_tarefa",{
    id: uuid().defaultRandom().primaryKey(),
    descricao: varchar({ length:64 }),
    status: integer().notNull(),
    usuarioId: uuid().references(() => usuario_tabela.id)
});

export const categoria_relation_with_usuario = relations(categoria, ({ one }) => ({
    author: one(usuario_tabela, {
        fields:[categoria.usuarioId],
        references: [usuario_tabela.id]
    })
}))