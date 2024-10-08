import { defineField, defineType } from "sanity";

export const endereco = defineType({
    title: 'Endereço',
    name: 'adress',
    type: 'document',
    fields: [
        defineField({
            name:'street',
            title: 'Nome da Rua',
            type: 'string'
        }),
        defineField({
            name: 'number',
            title: 'Número',
            type: 'string',
        }),
        defineField({
            name: 'neighbourhood',
            title: 'Bairro',
            type: 'string'
        }),
        defineField({
            name: 'city',
            title: 'Cidade',
            type: 'string'
        }),
        defineField({
            name: 'state',
            title: 'Estado',
            type: 'string'
        }),
        defineField({
            name: 'country',
            title: 'País',
            type: 'string'
        }),
        defineField({
            name: 'postal_code',
            title: 'CEP',
            type: 'string'
        })
    ]
})