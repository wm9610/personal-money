import {collection, getDocs, addDoc, Timestamp} from 'firebase/firestore';
import {query, orderBy} from 'firebase/firestore';
import {db} from '../../../firebaseConfig';

export default async function ExpenseHandler(req, res) {
  switch (req.method) {
    case 'GET':
      const result = await fetchAllExpenses();
      return res.status(200).json(result);

    case 'POST':
      const {name, category, price, date} = req.body;
      if (name && category && price && date) {
        const newExpense = {
          name,
          category,
          price,
          date: Timestamp.fromDate(new Date(date)),
        };
        const result = await addExpense(newExpense);
        return res.status(200).json(result);
      } else {
        return res.status(405).json({status: 'NG', expenseId: ''});
      }

    default:
      return res.status(405).json({
        status: 'NG',
        message: `Invalid method, ${req.method} not allowed`,
      });
  }
}

async function fetchAllExpenses() {
  try {
    const colRef = collection(db, 'expense');
    const q = query(colRef, orderBy('date'));
    const querySnapshot = await getDocs(q);
    const expenses = [];
    querySnapshot.forEach((item) => {
      const {date, ...other} = item.data();
      expenses.push({
        id: item.id,
        ...other,
        date: date.toDate(),
        month: date.toDate().getMonth() + 1,
      });
    });
    return {status: 'OK', expenses};
  } catch (e) {
    return {status: 'NG', expenses: []};
  }
}

async function addExpense(expense) {
  try {
    const colRef = collection(db, 'expense');
    const docRef = await addDoc(colRef, {
      ...expense,
    });
    return {status: 'OK', expenseId: docRef.id};
  } catch (e) {
    return {status: 'NG', expenseId: ''};
  }
}
