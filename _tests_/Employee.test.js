const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('init', () => {
      it('should require a name, id, and email', () => {
        const employee = new Employee('Ralph', 12, 'R@company.com');
        expect('name' in employee).toBe(true);
        expect('id' in employee).toBe(true);
        expect('email' in employee).toBe(true);
      });
    });
    describe('getName', () => {
      it('should return the name', () => {
          const employee = new Employee('Ralph', 12, 'R@company.com');

          expect(employee.getName()).toBe('Ralph');
      });
    });
    describe('getId', () => {
        it('should return the ID', () => {
            const employee = new Employee('Ralph', 12, 'R@company.com');

            expect(employee.getId()).toBe(12);
        });
      });
      describe('getEmail', () => {
        it('should return the email', () => {
            const employee = new Employee('Ralph', 12, 'R@company.com');

            expect(employee.getEmail()).toBe('R@company.com');
        });
      });
  });