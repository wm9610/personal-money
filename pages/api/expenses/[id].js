import {doc, getDoc, deleteDoc, setDoc, Timestamp} from 'firebase/firestore';
import {db} from '../../../firebaseConfig';

export default async function ExpenseHandler(req, res) {
  const {id} = req.query;

  switch (req.method) {
    case 'GET':
      const singleResult = await fetchSingleExpense(id);
      return res.status(200).json(singleResult);

    case 'DELETE':
      const deleteResult = await deleteExpense(id);
      return res.status(200).json(deleteResult);

    case 'PUT':
      const {name, category, price, date} = req.body;
      if (name || category || price || date) {
        const newExpense = {
          name,
          category,
          price,
          date: Timestamp.fromDate(new Date(date)),
        };
        const refId = await editExpense(id, newExpense);
        return res.status(200).json(refId);
      } else {
        return '';
      }

    default:
      return res.status(405).json({
        message: `Invalid method, ${req.method} not allowed`,
      });
  }
}

async function fetchSingleExpense(refId) {
  try {
    const docRef = doc(db, 'expense', refId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const {date, ...other} = docSnap.data();
      return {
        status: 'OK',
        expense: {
          ...other,
          date: date.toDate(),
          month: date.toDate().getMonth() + 1,
        },
      };
    } else {
      return {status: 'NG', expense: {}};
    }
  } catch (e) {
    return {status: 'NG', expense: {}};
  }
}

async function deleteExpense(refId) {
  try {
    const docRef = doc(db, 'expense', refId);
    deleteDoc(docRef);
    return {status: 'OK'};
  } catch (e) {
    return {status: 'NG'};
  }
}

async function editExpense(refId, expense) {
  try {
    const docRef = doc(db, 'expense', refId);
    const result = await setDoc(docRef, {
      ...expense,
    });
    console.log(result);
    return {status: 'OK'};
  } catch (e) {
    return {status: 'NG'};
  }
}
