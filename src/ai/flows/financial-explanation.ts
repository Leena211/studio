'use server';

/**
 * @fileOverview Explains financial concepts using AI.
 *
 * - explainFinancialConcept - A function that explains a given financial concept.
 * - ExplainFinancialConceptInput - The input type for the explainFinancialConcept function.
 * - ExplainFinancialConceptOutput - The return type for the explainFinancialConcept function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainFinancialConceptInputSchema = z.object({
  concept: z.string().describe('The financial concept to explain.'),
});
export type ExplainFinancialConceptInput = z.infer<typeof ExplainFinancialConceptInputSchema>;

const ExplainFinancialConceptOutputSchema = z.object({
  explanation: z.string().describe('A simplified explanation of the financial concept with relatable examples.'),
});
export type ExplainFinancialConceptOutput = z.infer<typeof ExplainFinancialConceptOutputSchema>;

export async function explainFinancialConcept(input: ExplainFinancialConceptInput): Promise<ExplainFinancialConceptOutput> {
  return explainFinancialConceptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainFinancialConceptPrompt',
  input: {schema: ExplainFinancialConceptInputSchema},
  output: {schema: ExplainFinancialConceptOutputSchema},
  prompt: `You are a financial guide for teenagers. Explain the following financial concept in a simplified way, using analogies and relatable examples that a teenager can understand:\n\nConcept: {{{concept}}}`,
});

const explainFinancialConceptFlow = ai.defineFlow(
  {
    name: 'explainFinancialConceptFlow',
    inputSchema: ExplainFinancialConceptInputSchema,
    outputSchema: ExplainFinancialConceptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
