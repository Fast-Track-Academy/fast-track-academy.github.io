import pandas as pd

# Example DataFrame, replace with your actual data loading
df = pd.DataFrame({
    'date': pd.date_range('2025-01-01', periods=100, freq='D'),
    'author': ['user1', 'user2'] * 50,
    'activity': range(100)
})

# Ensure 'date' is datetime
df['date'] = pd.to_datetime(df['date'])

# Group by ISO week number and author
weekly_activity = df.groupby([df['date'].dt.isocalendar().week, 'author']).agg({
    'activity': 'sum'
}).reset_index()

print(weekly_activity)
