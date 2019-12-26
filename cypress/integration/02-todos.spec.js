describe('Todos', () => {
  describe('App shell', () => {
    it('renders a heading', () => {
      cy.queryByTestId('heading').should('have.text', 'todos');
    });

    it('renders an input to add todos', () => {
      cy.queryByText('new-todo').should('have.value', '');
    });
  });
});
