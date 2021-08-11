class BankAccount:
    def __init__(self, balance, account_number):
        self.balance = balance
        self.account_number = account_number

    def deposit(self, deposit_amount):
        self.balance += deposit_amount

britt_money = BankAccount(250, 876888757)        
