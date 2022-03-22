const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('init', () => {
      it('should require a name, id, and email', () => {
        const intern = new Intern('Maribel', 24, 'M@email.com');
        expect('name' in intern).toBe(true);
        expect('id' in intern).toBe(true);
        expect('email' in intern).toBe(true);

      });
    });
    describe('getName', () => {
      it('should return the name', () => {
          const intern = new Intern('Maribel', 24, 'M@email.com');

          expect(intern.getName()).toBe('Maribel');
      });
    });
    describe('getId', () => {
        it('should return the ID', () => {
            const intern = new Intern('Maribel', 24, 'M@email.com');

            expect(intern.getId()).toBe(24);
        });
      });
      describe('getEmail', () => {
        it('should return the email', () => {
            const intern = new Intern('Maribel', 24, 'M@email.com');

            expect(intern.getEmail()).toBe('M@email.com');
        });
      });
      describe('getRole', () => {
        it('should return the role', () => {
            const intern = new Intern('Maribel', 24, 'M@email.com');

            expect(intern.getRole()).toBe('Intern');
        });
      });
  });