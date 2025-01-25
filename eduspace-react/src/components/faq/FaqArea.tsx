import { useState } from "react";

const FaqSection = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    const faqData = [
        {
            id: "1",
            title: " What is the minimum age requirement to enroll in the Tamravarsity course?",
            content:
                "  The minimum requirement for enrolling in the Tamravarsity course is completing the 12th standard. ",
        },
        {
            id: "2",
            title: "Is there an age limit for enrolling in the course?",
            content:
                "There is no age limit for enrolling in the Tamravarsity course.",
        },
        {
            id: "3",
            title: "Do I need any prior knowledge or experience to join Tamravarsity?",
            content: "No prior knowledge or experience is needed to join Tamravarsity as long as you have the interest.",
        },
        {
            id: "4",
            title: "How long is the duration of the course?",
            content: " Tamravarsity course duration is 3 months and 6 months.",
        },
        {
            id: "5",
            title: " How can I contact customer support if I have issues with my course?",
            content:
                " You can contact Tamravarsity's customer support through the contact information shown on their website.",
        },
        {
            id: "6",
            title: "What is the format of the course (e.g., online, in-person, hybrid)?",
            content:
                "The Tamravarsity course is available in all formats—online, in-person, and hybrid.",
        },
        {
            id: "7",
            title: "Will I receive a certificate upon completion of the course?",
            content:
                "   Yes, you will receive a certificate upon completion of the Tamravarsity course.",
        },
        {
            id: "8",
            title: "Are there any discounts or offers available for Tamravarsity students?",
            content:
                "  Discounts or offers for Tamravarsity students are available from time to time.",
        },
 
    ];

    const styles: { [key: string]: any } = {
        section: {
            padding: "60px 20px",
            fontFamily: "'Arial', sans-serif",
        },
        header: {
            textAlign: "center" as const,
            marginBottom: "40px",
        },
        title: {
            color: "#2c3e50",
            fontSize: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            marginBottom: "10px",
        },
        subtitle: {
            color: "#8e44ad",
            fontSize: "18px",
            textTransform: "uppercase",
        },
        faqContainer: {
            display: "flex",
            flexWrap: "wrap" as const,
            justifyContent: "center",
            gap: "30px",
        },
        column: {
            flex: "1 1 45%",
            maxWidth: "45%",
            minWidth: "300px",
        },
        accordionItem: {
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        accordionHeader: {
            background: "#f9f9f9",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#2c3e50",
        },
        accordionBody: {
            maxHeight: "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease, padding 0.3s ease",
            backgroundColor: "#fff",
            padding: "0 20px",
        },
        accordionBodyExpanded: {
            maxHeight: "200px",
            padding: "15px 20px",
        },
        icon: {
            fontSize: "20px",
            color: "#8e44ad",
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <h6 style={styles.subtitle}>Question & Answer</h6>
                <h2 style={styles.title}>Asked Questions?</h2>
            </div>
            <div className="container" style={styles.faqContainer}>
                <div style={styles.column}>
                    {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item) => (
                        <div
                            key={item.id}
                            style={styles.accordionItem}
                            onClick={() => toggleItem(item.id)}
                        >
                            <div style={styles.accordionHeader}>
                                {item.title}
                                <span style={styles.icon}>
                                    {openId === item.id ? "✖" : "➕"}
                                </span>
                            </div>
                            <div
                                style={{
                                    ...styles.accordionBody,
                                    ...(openId === item.id
                                        ? styles.accordionBodyExpanded
                                        : {}),
                                }}
                            >
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={styles.column}>
                    {faqData.slice(Math.ceil(faqData.length / 2)).map((item) => (
                        <div
                            key={item.id}
                            style={styles.accordionItem}
                            onClick={() => toggleItem(item.id)}
                        >
                            <div style={styles.accordionHeader}>
                                {item.title}
                                <span style={styles.icon}>
                                    {openId === item.id ? "✖" : "➕"}
                                </span>
                            </div>
                            <div
                                style={{
                                    ...styles.accordionBody,
                                    ...(openId === item.id
                                        ? styles.accordionBodyExpanded
                                        : {}),
                                }}
                            >
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
