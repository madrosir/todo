import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full mt-4 border-t bg-slate-100 ">
            <div >

                <div >
                    <Button size='sm' variant='ghost'>
                        Privacy Policy
                    </Button>
                    <Button size='sm' variant='ghost'>
                        Terms of Service
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Footer;