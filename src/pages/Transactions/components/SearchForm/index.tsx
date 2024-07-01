import { MagnifyingGlass } from 'phosphor-react'
import { SeachFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

/**
 * useMemo -> use when have a lot of components to render in screen (heavy html)
 * Memo:
 * 0. Hooks changed, props changed (deep comparison)
 * 0.1 Comparar com a versao anterior
 * 0.2 Se mudou algo, ele permite a nova renderizacao
 */

// Schema form
const searchFormSchema = z.object({
  query: z.string(),
})

// Type form
type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SeachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search transaction"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
