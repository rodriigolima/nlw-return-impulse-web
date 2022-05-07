import { SubmitFeedbackUseCase } from './submit-feedback-use-case';
describe('Submit feedback', () =>{
    it('should be able to submit a feedback', async () =>{
        const submiteFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () =>{} },
        )

        await expect(submiteFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'test.jpg',
        })).resolves.not.toThrow();
    })
})