import { useRef, useState, useEffect } from "react";
import styles from "./list.module.scss"
import { RootState } from "../../types";

const List = ({cost, income}: RootState) => {
    const allTransactions = [
        ...cost.map(item => ({ ...item, type: 'cost' })),
        ...income.map(item => ({ ...item, type: 'income' }))
    ];
    
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [filteredResults, setFilteredResults] = useState(allTransactions);
    
    const uniqueCategories = [...new Set(allTransactions.map(item => item.category))];
    
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [dateRange, setDateRange] = useState({startDate: '', endDate: ''});
    const [transactionType, setTransactionType] = useState('all');

    useEffect(() => {
        handleFilterChange();
    }, [selectedCategory, dateRange, transactionType]);

    const handleSearch = () => {
        const searchTerm = searchInputRef.current?.value.toLowerCase();
        handleFilterChange(searchTerm);
    };
    
    const handleFilterChange = (searchTerm = searchInputRef.current?.value.toLowerCase() || '') => {
        let filteredData = [...allTransactions];
        
        if (searchTerm) {
            filteredData = filteredData.filter(
                item => item.title.toLowerCase().includes(searchTerm) || item.category.toLowerCase().includes(searchTerm)
            );
        }
        
        if (selectedCategory !== 'all') {
            filteredData = filteredData.filter(item => item.category === selectedCategory);
        }
        
        if (transactionType !== 'all') {
            filteredData = filteredData.filter(item => item.type === transactionType);
        }
        
        if (dateRange.startDate) {
            const startDate = new Date(dateRange.startDate);
            filteredData = filteredData.filter(item => new Date(item.date) >= startDate);
        }
        
        if (dateRange.endDate) {
            const endDate = new Date(dateRange.endDate);
            endDate.setHours(23, 59, 59, 999);
            filteredData = filteredData.filter(item => new Date(item.date) <= endDate);
        }
        
        setFilteredResults(filteredData);
    };
    
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDateRange(prev => ({...prev, [name]: value}));        
    };
    
    const resetFilters = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
        }
        setSelectedCategory('all');
        setDateRange({ startDate: '', endDate: '' });
        setTransactionType('all');
        setFilteredResults(allTransactions);
    };

    const totalAmount = filteredResults.reduce((sum, item) => {
        return item.type === 'income' 
            ? sum + Number(item.quantity) 
            : sum - Number(item.quantity);
    }, 0);

    return (
        <div className={styles.listContainer}>
            <div className={styles.listHeader}>
                <div className={styles.searchSection}>
                    <input
                        type="text"
                        ref={searchInputRef}
                        placeholder="search..." 
                        onChange={handleSearch}
                    />
                    <button onClick={handleSearch}>search</button>
                </div>
                <div className={styles.filterSection}>
                    <div className={styles.filterItem}>
                        <label>category:</label>
                        <select 
                            value={selectedCategory} 
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">all</option>
                            {uniqueCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className={styles.filterItem}>
                        <label>transaction type:</label>
                        <select 
                            value={transactionType} 
                            onChange={(e) => setTransactionType(e.target.value)}
                        >
                            <option value="all">all</option>
                            <option value="income">income</option>
                            <option value="cost">cost</option>
                        </select>
                    </div>
                    
                    <div className={styles.filterItem}>
                        <label>from:</label>
                        <input 
                            type="date" 
                            name="startDate"
                            value={dateRange.startDate} 
                            onChange={handleDateChange}
                        />
                    </div>
                    
                    <div className={styles.filterItem}>
                        <label>to:</label>
                        <input 
                            type="date" 
                            name="endDate"
                            value={dateRange.endDate} 
                            onChange={handleDateChange}
                        />
                    </div>
                    
                    <button onClick={resetFilters}>reset filters</button>
                </div>
            </div>

            <div className={styles.listItem_header}>
                <p>title</p>
                <p>category</p>
                <p>date</p>
                <p>quantity</p>
            </div>
            
            {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                    <div 
                        className={`${styles.listItem} ${item.type === 'income' ? styles.incomeItem : styles.costItem}`} 
                        key={item.id}
                    >
                        <p>{item.title}</p>
                        <p>{item.category}</p>
                        <p>{new Date(item.date).toLocaleDateString()}</p>
                        <p>{item.type === 'income' ? '+' : '-'}{item.quantity}</p>
                    </div>
                ))
            ) : (
                <div className={styles.noResults}>not match any transaction</div>
            )}

            <div className={styles.summarySection}>
                <p>Number of results: {filteredResults.length}</p>
                <p className={totalAmount >= 0 ? styles.positiveTotal : styles.negativeTotal}>
                    Total stock: {totalAmount}
                </p>
            </div>
        </div>
    )
};

export default List;