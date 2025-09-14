import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    const words = text.split(" ");

    return (
        <motion.div className={cn("flex flex-wrap", className)}>
            {words.map((word, idx) => (
                <div key={idx} className="mr-2">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </div>
            ))}
        </motion.div>
    );
};
