import { defineField, defineType } from "sanity";

export const pessoa = defineType({
    type: 'document',
    title: 'Pessoa',
    name: 'pessoa',
    fields: [
        defineField({
            name: 'id',
            title: 'ID',
            type: 'number',
        }),
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string'
        }),
        defineField({
            name: 'birthday',
            title: 'Data de Aniversário',
            type: 'date'
        }),
        defineField({
            name: 'email',
            title: 'E-mail',
            type: 'string'
        }),
        defineField({
            name: 'phone_number',
            title: 'Telefone',
            type: 'string',
        }),
        defineField({
            name: 'profile_pic',
            title: 'Imagem de perfil',
            type: 'image'
        }),
        defineField({
            name: 'status',
            title: 'Ativo',
            type: 'boolean'
        }),
        defineField({
            name: 'adress',
            title: 'Endereço',
            type: 'adress'
        })


    ]
})