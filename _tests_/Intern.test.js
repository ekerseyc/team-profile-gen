const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('init', () => {
      it('should require a name, id, and email', () => {
        const intern = new Intern('Maribel', 24, 'M@company.com', 'Rutgers');
        expect('name' in intern).toBe(true);
        expect('id' in intern).toBe(true);
        expect('email' in intern).toBe(true);
        expect('school' in intern).toBe(true);

      });
    });
    describe('getName', () => {
      it('should return the name', () => {
          const intern = new Intern('Maribel', 24, 'M@company.com', 'Rutgers');

          expect(intern.getName()).toBe('Maribel');
      });
    });
    describe('getId', () => {
        it('should return the ID', () => {
            const intern = new Intern('Maribel', 24, 'M@company.com', 'Rutgers');

            expect(intern.getId()).toBe(24);
        });
      });
      describe('getEmail', () => {
        it('should return the email', () => {
            const intern = new Intern('Maribel', 24, 'M@company.com', 'Rutgers');

            expect(intern.getEmail()).toBe('M@company.com');
        });
      });
      describe('getSchool', () => {
        it('should return the school', () => {
            const intern = new Intern('Maribel', 24, 'M@company.com', 'Rutgers');

            expect(intern.getSchool()).toBe('Rutgers');
        });
      });
      describe('getRole', () => {
        it('should return the role', () => {
            const intern = new Intern('Maribel', 24, 'M@company.com', 'Rutgers');

            expect(intern.getRole()).toBe('Intern');
        });
      });
  });